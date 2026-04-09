declare function sanitizeHtml(dirty: string, options?: sanitizeHtml.IOptions): string;

declare namespace sanitizeHtml {
  interface Attributes {
    [attr: string]: string;
  }

  interface Tag {
    tagName: string;
    attribs: Attributes;
    text?: string;
  }

  interface Frame {
    tag: string;
    attribs: Attributes;
    text: string;
    tagPosition: number;
    mediaChildren: string[];
  }

  type Transformer = (tagName: string, attribs: Attributes) => Tag;

  type AllowedAttribute = string | { name: string; multiple?: boolean; values: string[] };

  type DisallowedTagsMode = 'discard' | 'escape' | 'recursiveEscape' | 'completelyDiscard';

  interface IOptions {
    allowedTags?: string[] | false;
    allowedAttributes?: Record<string, AllowedAttribute[]> | false;
    allowedStyles?: Record<string, Record<string, RegExp[]>>;
    allowedClasses?: Record<string, string[] | boolean | Array<string | RegExp>>;
    allowedIframeDomains?: string[];
    allowedIframeHostnames?: string[];
    allowIframeRelativeUrls?: boolean;
    allowedSchemes?: string[] | boolean;
    allowedSchemesByTag?: Record<string, string[]>;
    allowedSchemesAppliedToAttributes?: string[];
    allowedScriptDomains?: string[];
    allowedScriptHostnames?: string[];
    allowProtocolRelative?: boolean;
    allowVulnerableTags?: boolean;
    allowedEmptyAttributes?: string[];
    disallowedTagsMode?: DisallowedTagsMode;
    enforceHtmlBoundary?: boolean;
    exclusiveFilter?: (frame: Frame) => boolean | string;
    nestingLimit?: number;
    nonBooleanAttributes?: string[];
    nonTextTags?: string[];
    selfClosing?: string[];
    transformTags?: Record<string, string | Transformer>;
    textFilter?: (text: string, tagName: string) => string;
    parser?: ParserOptions;
    parseStyleAttributes?: boolean;
    preserveEscapedAttributes?: boolean;
    onOpenTag?: (name: string, attribs: Attributes) => void;
    onCloseTag?: (name: string, isImplied: boolean) => void;
  }

  interface ParserOptions {
    decodeEntities?: boolean;
  }

  const defaults: IOptions;

  function simpleTransform(
    newTagName: string,
    newAttribs?: Attributes,
    merge?: boolean
  ): Transformer;
}

export = sanitizeHtml;
