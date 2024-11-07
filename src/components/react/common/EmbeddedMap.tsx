import React from "react";

type EmbeddedMapProps = {
  locationUrl: string;
  height?: string;
  width?: string;
};

const EmbeddedMap: React.FC<EmbeddedMapProps> = ({
  locationUrl,
  height = "450px",
  width = "100%",
}) => (
  <iframe
    src={locationUrl}
    width={width}
    height={height}
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
  ></iframe>
);

export default EmbeddedMap;
