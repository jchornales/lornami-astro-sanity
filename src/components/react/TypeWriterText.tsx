import React from "react";
import Typewriter from "typewriter-effect";

interface TypeWriterTextProps {
  text: string;
}

function TypeWriterText({ text }: TypeWriterTextProps) {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
    />
  );
}

export default TypeWriterText;
