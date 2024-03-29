import { SetStateAction, useState, useEffect } from "react";

import AppFooter from "../../common/AppFooter/AppFooter";
import TextWraperComponent from "./components/text-wraper-component";
import TypewriterComponent from "./components/typewriter-component";
import "./style/app-Introduction.css";

interface IntroductionType {
  key: string;
  tag_name: string;
  tag_color: string;
}

/***
 * @description 公共页面 - 个人简介页
 *  */
function AppIntroduction() {
  const [data, setData] = useState<IntroductionType[]>([
    { key: "1", tag_name: "百事亨通", tag_color: "" },
    { key: "2", tag_name: "敬颂春祺", tag_color: "" },
    { key: "3", tag_name: "肃请夏安", tag_color: "" },
    { key: "4", tag_name: "谨颂秋祉", tag_color: "" },
    { key: "5", tag_name: "顺问冬安", tag_color: "" },
    { key: "6", tag_name: "喜气洋洋", tag_color: "" },
    { key: "7", tag_name: "顺顺如意", tag_color: "" },
    { key: "8", tag_name: "神采奕奕", tag_color: "" },
    { key: "9", tag_name: "迎春納福", tag_color: "" },
    { key: "10", tag_name: "閤家平安", tag_color: "" },
  ]);

  const [color] = useState(["#54a9ff", "#2ECC71", "#ffae43", "#fc725a", "#A569BD", "#E74C3C", "#D35400"]);
  const [text, setText] = useState<SetStateAction<string>>("");

  useEffect(() => {
    const updateData = data.map((item) => ({ ...item, tag_color: color[Math.floor(Math.random() * color.length)] }));
    const updateText = data.map((item) => ({ tag_name: item.tag_name }));
    setText(updateText[Math.floor(Math.random() * updateData.length)].tag_name);
    setData(updateData);
  }, [color]);

  const linkElement = document.querySelector('link[rel="icon"]');
  const href = linkElement?.getAttribute("href");
  const relativePath = href?.replace("%PUBLIC_URL%", "");

  return (
    <main className="introduction-main">
      <TextWraperComponent text={text}></TextWraperComponent>
      <section className="introduction-container">
        <article className="item-1">
          <img src={relativePath} alt="" />
          <div className="introduction-name">Venchi</div>
          <p className="introduction-text">愿煦日的和风护卫着可爱的你，愿你带着满满的春笑回来</p>
          <div className="introduction-tags">
            {data.map((item) => (
              <span key={item.key} style={{ color: item.tag_color }}>
                {item.tag_name}
              </span>
            ))}
          </div>
        </article>
        <article className="item-2">2</article>
        <article className="item-3">3</article>
        <article className="item-4">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=VenchiXie" alt="" />
        </article>
        <article className="item-5">5</article>
        <article className="item-6">
          <img src="https://github-readme-stats.vercel.app/api?username=VenchiXie&show_icons=true&theme=tokyonight" alt="" />
        </article>
        <article className="item-7">7</article>
        <article className="item-8">
          <TypewriterComponent text={text}></TypewriterComponent>
        </article>
        <article className="item-9">9</article>
      </section>
      <AppFooter></AppFooter>
    </main>
  );
}

export default AppIntroduction;
