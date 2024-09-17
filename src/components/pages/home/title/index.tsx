import style from './index.module.scss';

export const Title = () => {
  return (
    <div className={style['title-container']}>
      <div className={style.background} />
      <h1 className={style.title}>
        Chasing
        <br />
        Seasons.
      </h1>
    </div>
  );
};
