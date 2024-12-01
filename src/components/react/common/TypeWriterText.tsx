import React from "react";
import Typewriter from "typewriter-effect";

interface TypeWriterTextProps {
  text: string;
}

function TypeWriterText({ text }: Readonly<TypeWriterTextProps>) {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
    />
  );
}

export default TypeWriterText;
