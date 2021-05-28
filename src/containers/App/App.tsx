import React from 'react';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import { Contact } from '../Contact/Contact';
import { Introduction } from '../Introduction/Introduction';
import { Profile } from '../Profile/Profile';
import { Projects } from '../Projects/Projects';

export const App = () => {
  return (
    <main>
      <HtmlTag tag={"<html>"}></HtmlTag>
        <HtmlTag tag={"⠀<body>"}></HtmlTag>
          <Introduction></Introduction>
          <Projects></Projects>
          <Profile></Profile>
          <Contact></Contact>
        <HtmlTag tag={"⠀</body>"}></HtmlTag>
      <HtmlTag tag={"</html>"}></HtmlTag>
    </main>
  );
}

export default App;
