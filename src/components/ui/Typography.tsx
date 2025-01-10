import clsx from "clsx";
import React, { ElementType } from "react";

type TypographyProps = {
  tag?: (typeof validTextTags)[number];
  variant?: keyof typeof variants;
  children: React.ReactNode;
  bold?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const variants = {
  h1: "text-6xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  subtitle: "text-lg font-medium",
  text: "text-base",
  caption: "text-xs",
  overline: "text-xs uppercase",
};

const validTextTags = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
  "strong",
  "em",
  "small",
  "mark",
  "del",
  "ins",
  "sub",
  "sup",
  "blockquote",
  "q",
  "cite",
  "abbr",
  "time",
  "code",
  "var",
  "samp",
  "kbd",
];

const Typography = ({
  tag = "p",
  children,
  variant = "text",
  bold = false,
  ...props
}: TypographyProps) => {
  if (tag && !validTextTags.includes(tag)) {
    tag = "p";
  }
  const Tag = tag as ElementType;
  return (
    <Tag
      className={clsx(variants[variant], props.className, {
        "font-bold": bold,
      })}
    >
      {children}
    </Tag>
  );
};

export default Typography;
