import styles from "./Projects.module.css";
import {
  moviesapp,
  portfolioclone,
  productlist,
  todolist,
  weatherapp,
} from "./../../assets/index";
import { useThemeContext } from "store/ThemeContext";

function Projects() {
  const { theme } = useThemeContext();
  return (
    <div className={`${styles.projects} ${styles?.[theme]}`}>
      <a
        className={styles.item}
        href="https://github.com/Muhammet-Duran/Movie-App"
      >
        <div className={styles.item_img}>
          <img src={moviesapp} alt="toDoImg" />
        </div>
        <div className={styles.item_text}>
          <h3>Movies App</h3>
          <p className={styles.description}>
            I built a movie application with React JS,we can search for movies
            we like.You can add to your favorite list
          </p>
          <div className={styles.techs_area}>
            <span className={styles.tech_stack}>ReactJS</span>
            <span className={styles.tech_stack}>Axios</span>
            <span className={styles.tech_stack}>Sass</span>
          </div>
        </div>
      </a>
      <a
        className={styles.item}
        href="https://github.com/Muhammet-Duran/todo-list"
      >
        <div className={styles.item_img}>
          <img src={todolist} alt="toDoImg" />
        </div>
        <div className={styles.item_text}>
          <h3>To Do List</h3>
          <p className={styles.description}>
            What is your plan?Mark what you've done,you can edit what to do and
            more...
          </p>
          <div className={styles.techs_area}>
            <span className={styles.tech_stack}>ReactJS</span>
            <span className={styles.tech_stack}>Local Storage</span>
            <span className={styles.tech_stack}>Sass</span>
          </div>
        </div>
      </a>
      <a
        className={styles.item}
        href="https://github.com/Muhammet-Duran/weather-app"
      >
        <div className={styles.item_img}>
          <img src={weatherapp} alt="weatherImg" />
        </div>
        <div className={styles.item_text}>
          <h3>Weather Forecast App</h3>
          <p className={styles.description}>
            let's see how is the weather today ?You can check the daily weather
            conditions of the city you want.
          </p>
          <div className={styles.techs_area}>
            <span className={styles.tech_stack}>ReactJS</span>
            <span className={styles.tech_stack}>React Hooks</span>
            <span className={styles.tech_stack}>Sass</span>
          </div>
        </div>
      </a>
      <a
        className={styles.item}
        href="https://github.com/Muhammet-Duran/product-list.git"
      >
        <div className={styles.item_img}>
          <img src={productlist} alt="productListImg" />
        </div>
        <div className={styles.item_text}>
          <h3>Product List</h3>
          <p className={styles.description}>
            Product listing, add the product you like to the cart. You can
            change the listing view. You can filter as you wish. You can change
            the amount of the product in the cart, you can delete it.
          </p>
          <div className={styles.techs_area}>
            <span className={styles.tech_stack}>ReactJS</span>
            <span className={styles.tech_stack}>Router Dom</span>
            <span className={styles.tech_stack}>Axios</span>
            <span className={styles.tech_stack}>Local Storage</span>
            <span className={styles.tech_stack}>Json Server</span>
            <span className={styles.tech_stack}>Sass</span>
          </div>
        </div>
      </a>
      <a
        className={styles.item}
        href="https://github.com/Muhammet-Duran/porfolio-clone.git"
      >
        <div className={styles.item_img}>
          <img src={portfolioclone} alt="portfolioCloneImg" />
        </div>
        <div className={styles.item_text}>
          <h3>Portfolio Clone</h3>
          <p className={styles.description}>
            I cloned a single page, used different npm packages eg swiper-js,
            react tabs... It was fun and relaxing for me
          </p>
          <div className={styles.techs_area}>
            <span className={styles.tech_stack}>ReactJS</span>
            <span className={styles.tech_stack}>Router Dom</span>
            <span className={styles.tech_stack}>Swiper Js</span>
            <span className={styles.tech_stack}>Module Css</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Projects;
