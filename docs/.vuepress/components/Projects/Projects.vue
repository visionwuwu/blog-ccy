<template>
  <div class>
    <Common :sidebar="false" :isComment="false">
      <section class="project">
        <h1 class="project-title">My Project</h1>
        <h4 class="project-subtitle">如果你觉得下面的项目可能还不错, 别忘了给个 start 吧！</h4>
        <!-- loading... -->
        <section class="project-loading" v-if="loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="margin: auto; background: rgb(255, 255, 255); display: block;"
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="rotate(88.4315 50 50)">
              <g transform="translate(50 50)">
                <g transform="scale(0.8)">
                  <g transform="translate(-50 -58)">
                    <path
                      fill="#6a67ce"
                      d="M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z"
                    />
                    <path
                      fill="#fc636b"
                      d="M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z"
                    />
                    <circle fill="#ffb900" cx="50" cy="27" r="7.4" />
                    <path
                      fill="#3be8b0"
                      d="M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z"
                    />
                  </g>
                </g>
              </g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.8620689655172413s"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
              />
            </g>
          </svg>
          <!-- <img src="./images/loading.svg" /> -->
          <!-- <span>Loading...</span> -->
        </section>
        <!-- projects-item -->
        <section class="project-container" v-else-if="projects.length > 0">
          <article v-for="(item, index) in projects" :key="index">
            <project-item :options="item"></project-item>
          </article>
        </section>
        <!-- nothing -->
        <NoThing v-else :text="text" />
      </section>
    </Common>
  </div>
</template>

<script>
import Common from "@theme/components/Common.vue";
import { httpGet } from "./utils/fetch.js";
import ProjectItem from "./ProjectItem";
import { filter, orderBy } from "lodash";
import NoThing from "../Common/NoThing";
export default {
  name: "Projects",
  components: {
    Common,
    ProjectItem,
    NoThing
  },
  data() {
    return {
      projects: [],
      loading: true,
      text: "当前没有项目"
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      this.loading = true;
      httpGet("https://api.github.com/users/visionwuwu/repos")
        .then(res => {
          this.loading = false;
          // 过滤掉私有的项目, 暂不过滤掉 fork 项目 && !item.fork
          const projects = filter(res, item => !item.private);
          this.projects = orderBy(
            projects,
            ["stargazers_count", "forks_count", "name", "created_at"],
            ["desc", "desc", "asc", "desc"]
          );
        })
        .catch(err => {
          this.text = "貌似出错了！！！";
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.project {
  max-width: 1024px;
  min-height: 300px;
  margin: 4rem auto;
  margin-top: 6rem;
}
.project-title,
.project-subtitle {
  text-align: center;
}
.project-loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-loading img {
  position: relative;
}
.project-loading span {
  position: absolute;
}
.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>