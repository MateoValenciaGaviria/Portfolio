import React from 'react';
import { HtmlTag } from '../../components/HtmlTag';
import { Contact } from '../Contact/Contact';
import { Introduction } from '../Introduction/Introduction';
import { Profile } from '../Profile/Profile';
import { Projects } from '../Projects/Projects';

export const App = () => {
  return (
    <main>
      <HtmlTag tag={"<Html>"}></HtmlTag>
        <HtmlTag tag={"⠀<body>"}></HtmlTag>
          <Introduction></Introduction>
          <Projects></Projects>
          <Profile></Profile>
          <Contact></Contact>
        <HtmlTag tag={"⠀</body>"}></HtmlTag>
      <HtmlTag tag={"</Html>"}></HtmlTag>
    </main>
  );
}

export default App;
