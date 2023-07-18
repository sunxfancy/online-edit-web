import VueLogo from "@/assets/images/vue.png";
import ReactLogo from "@/assets/images/react.png";
import NodeLogo from "@/assets/images/node.png";
import GoLogo from "@/assets/images/go.png";
import AddLogo from "@/assets/images/add.svg";

import EditorTitleObjects from "./edit-title";
import LayoutSwitchObjects from "./layout-switch";
import type { layoutModeTypes } from "./layout-switch";

interface TemplateType {
  src: string;
  alt: string;
  index: number;
}

export const Template: Array<TemplateType> = [
  {
    src: AddLogo,
    alt: "新建空白文档",
    index: 1,
  },
  {
    src: VueLogo,
    alt: "Vue",
    index: 2,
  },
  {
    src: ReactLogo,
    alt: "React",
    index: 3,
  },
  {
    src: NodeLogo,
    alt: "node",
    index: 4,
  },
  {
    src: GoLogo,
    alt: "go",
    index: 5,
  },
];

export { EditorTitleObjects, LayoutSwitchObjects, layoutModeTypes };
