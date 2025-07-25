"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-5 py-3 border mt-10 border-[#4C6F35] ",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0  text-dark  ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block ">{tab.title}</span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-20", contentClassName)}
      />
    </>
  );
};

// export const FadeInDiv = ({
//   className,
//   tabs,
//   hovering,
// }: {
//   className?: string;
//   key?: string;
//   tabs: Tab[];
//   active: Tab;
//   hovering?: boolean;
// }) => {
//   const isActive = (tab: Tab) => {
//     return tab.value === tabs[0].value;
//   };
//   return (
//     <div className="relative w-full h-full">
//       {tabs.map((tab, idx) => (
//         <motion.div
//           key={tab.value}
//           layoutId={tab.value}
//           style={{
//             scale: 1 - idx * 0.1,
//             top: hovering ? idx * -100 : 0,
//             zIndex: -idx,
//             opacity: idx < 3 ? 1 - idx * 0.1 : 0,
//           }}
//           animate={{
//             y: isActive(tab) ? [0, 40, 0] : 0,
//           }}
//           className={cn("w-full h-full absolute top-0 left-0", className)}
//         >
//           {tab.content}
//         </motion.div>
//       ))}
//     </div>
//   );
// };
export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  active,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.05,
            top: hovering ? idx * -50 : 0,
            zIndex: tabs.length - idx,
            opacity: idx < 3 ? 1 - idx * 0.05 : 0,
            position: isActive(tab, active) ? "relative" : "absolute",
          }}
          animate={{
            y: isActive(tab, active) ? [0, 30, 0] : 0,
          }}
          className={cn(
            "w-full transition-all duration-500 ease-in-out",
            isActive(tab, active) ? "block" : "hidden"
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

const isActive = (tab: Tab, active: Tab) => tab.value === active.value;
