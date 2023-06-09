import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: JSX.Element | string;
  Svg: JSX.Element | string | null;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Articulos</Translate>,
    Svg: 'string',
    description: (
      <>
        Articulos breves sobre temas de ciencia de datos, inteligencia artificial y machine learning.
      </>
    ),
  },
  {
    title: <Translate>Tutoriales</Translate>,
    Svg: 'string',
    description: (
      <>
        Tutoriales sobre como usar herramientas de ciencia de datos, inteligencia artificial y machine learning.
      </>
    ),
  },
  {
    title: <Translate>Cheat Sheets</Translate>,
    Svg: 'string',
    description: (
      <>
        Cheat sheets con lo mas importante que debes saber sobre ciencia de datos, inteligencia artificial y machine learning.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
