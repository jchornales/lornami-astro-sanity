import { useLoadQuery } from "@/sanity/lib/useLoadQuery";
import { useUrlForImage } from "@/sanity/lib/useUrlForImage";
import type { SanityDocument } from "@sanity/client";
import { getImage } from "astro:assets";
import { useEffect, useRef } from "react";
import useIsAtViewportTop from "@/lib/hooks/useIsAtViewportTop";
import { isBackgroundDark } from "@/lib/hooks/useStateStore";
import "@styles/Banner.css";

const { data: content } = await useLoadQuery<SanityDocument[]>({
  query: `*[_type == "webContent" && slug.current == "need-a-photographer-banner"]`,
});

const banner = await getImage({
  src: useUrlForImage(content[0].image).url(),
  format: "webp",
  inferSize: true,
});

function Banner() {
  const elementRef = useRef<HTMLDivElement>(null);
  const isAtTop = useIsAtViewportTop(elementRef, { offset: 0 });

  useEffect(() => {
    if (isAtTop) {
      isBackgroundDark.set(true);
    } else {
      isBackgroundDark.set(false);
    }
  }, [isAtTop]);

  return (
    <div
      ref={elementRef}
      className="banner-wrapper"
      data-attribute="dark"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <p className="text --small" data-aos="fade-zoom-in">
        Need a photographer?
      </p>
      <a
        href="/services"
        className="text --large"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        Let's work together
      </a>
      <div className="banner-overlay"></div>
    </div>
  );
}

export default Banner;
