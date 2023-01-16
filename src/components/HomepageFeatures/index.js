import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Blog Post",
    Svg: require("@site/static/img/blogpost.svg").default,
    description: (
      <>
        Do you want to read more about the UseCase itself? Max Streifeneder has
        written an entire blog post on the SAP Community: "Automate your life
        with SAP Build Process Automation"
      </>
    ),
  },
  {
    title: "Here could be something else",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        I'm just too stupid to adjust the css - maybe somebody could fix that,
        when only 2 items are displayed that it's still centered ;-)
      </>
    ),
  },
  {
    title: "Similar UseCases",
    Svg: require("@site/static/img/solution.svg").default,
    description: (
      <>
        Are you interested in similar UseCases for the SAP Business Technology
        Platform? Find them here on github.com/sap-samples
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
