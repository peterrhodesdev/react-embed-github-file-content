import React from "react";

function convertGitHubUrlToRaw(url) {
  const [user, repo, blob, branch, ...filePath] = url.replace("https://github.com/", "").split("/");
  const rawFileUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filePath.join("/")}`;
  return rawFileUrl;
}

function getFileExtension(url) {
  const filename = url.split("/").pop();
  return filename.slice((Math.max(0, filename.lastIndexOf(".")) || Infinity) + 1);
}

const EmbedGitHubFileContent = ({
  url,
  loadingComponent,
  errorComponent,
  onLoad,
  onError
}) => {
  const [gitHubFileContent, setGitHubFileContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorOccurred, setErrorOccurred] = React.useState(false);

  const gitHubUrlRegEx = /^https:\/\/github\.com\/.*\/.*\/blob\/.*/;
  if (!url.match(gitHubUrlRegEx)) {
    throw new Error("Invalid URL format");
  }

  React.useEffect(() => {
    setGitHubFileContent("");
    setIsLoading(true);
    setErrorOccurred(false);

    const rawFileUrl = convertGitHubUrlToRaw(url);

    const fetchGitHubFileContent = async () => {
      try {
        const response = await fetch(rawFileUrl, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
        });

        if (!response.ok) {
          setErrorOccurred(true);
          onError();
        } else {
          const text = await response.text();
          setGitHubFileContent(text);
          setIsLoading(false);
          onLoad();
        }
      } catch (err) {
        setErrorOccurred(true);
        onError();
      }
    };

    fetchGitHubFileContent();
  }, [url, onLoad, onError]);

  if (errorOccurred) {
    return errorComponent;
  }

  if (isLoading) {
    return loadingComponent;
  }

  return (
    <pre>
      <code className={`language-${getFileExtension(url)}`}>{gitHubFileContent}</code>
    </pre>
  );
}

export default EmbedGitHubFileContent;

