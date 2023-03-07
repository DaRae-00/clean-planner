import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import WorkList from "containers/work-list";

export default function Home() {
  return (
    <Layout>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, size }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            size={size}
          />
        ))}
      </div>
    </Layout>
  );
}

const features = [
  {
    title: "LIST",
    description: "목록을 만들어주세요.",
    size: 2,
    demo: <WorkList />,
  },
  {
    title: "선택",
    description: "planner",
    size: 1,
    demo: <div> test </div>,
  },
  {
    title: "달력",
    description: "planner",
    size: 1,
    demo: <div> test </div>,
  },
  {
    title: "Todo",
    description: "planner",
    size: 2,
    demo: <div> test </div>,
  },
  {
    title: "chat",
    description: "planner",
    size: 3,
    demo: <div> test </div>,
  },
];
