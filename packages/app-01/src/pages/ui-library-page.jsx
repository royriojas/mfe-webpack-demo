import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React from "react";
import UiLibraryMd from "../docs/UiLibrary.md";
import { loadFromRemote } from "fm-loader";

// const Button = React.lazy(() => import('app_03/Button'));
const Button = React.lazy(() => loadFromRemote({ remote: { url: 'https://app3.local.dev.com/remoteEntry.js', name: 'app_03' }, component: 'Button' }));

const UiLibraryPage = () => (
  <Page title="UI Library Demo">
    <Markdown>{UiLibraryMd}</Markdown>
    <React.Suspense fallback="Loading Styled Button...">
      <Button>&#128133; Button</Button>
    </React.Suspense>
  </Page>
);

export default UiLibraryPage;
