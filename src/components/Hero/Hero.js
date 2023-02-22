import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
         Welcome to my portfolio site! As a web developer, I am excited to share my passion for creating beautiful and functional websites with you. Here, you will find examples of my work, as well as information about my skills and experience.
        </SectionText>
        <Button onClick={props.handleClick}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;