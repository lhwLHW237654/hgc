<template>
  <div class="timeLine pr">
    <!-- <div id="content">
      <div class="card">
        <div class="card-time">2021</div>
        <div class="card-title">《你的孤独，虽败犹荣》</div>
        <div class="card-passage">
          <br />
          如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。
          <br />
          <br />
          If you stop, it's rock bottom. If you're still going, it's uphill. That's the best statement I've ever heard about a rock bottom.
        </div>
      </div>
      <div class="card">
        <div class="card-time">2022</div>
        <div class="card-title">《萤火之森》</div>
        <div class="card-passage">
          <br />
          如果时光可以倒流，我还是会选择认识你，虽然会伤痕累累，但是心中的温暖记忆是谁都无法给予的。谢谢你来过我的世界。
          <br />
          <br />
          If time could be turned back, I would still choose to know you, although it will be scarred, but the warm memory in my heart is no one can
          give. Thank you for coming to my world.
        </div>
      </div>
      <div class="card">
        <div class="card-time">2023</div>
        <div class="card-title">《平凡的世界》</div>
        <div class="card-passage">
          <br />
          人生啊，是这样不可预测，没有永恒的痛苦，也没有永恒的幸福，生活像流水一般，有时是那么平展，有时又是那么曲折。
          <br />
          <br />
          Life, ah, is so unpredictable, there is no eternal pain, there is no eternal happiness, life is like running water, sometimes it is so flat,
          sometimes it is so tortuous.
        </div>
      </div>
      <div class="card">
        <div class="card-time">2024</div>
        <div class="card-title">《道林・格雷的画像》</div>
        <div class="card-passage">
          <br />
          不要虚掷你的黄金时代，不要去倾听枯燥乏味的东西，不要设法挽留无望的失败，不要把你的生命献给无知、平庸和低俗。
          <br />
          <br />
          Do not waste your golden years, do not listen to the boring, do not try to prevent hopeless failure, do not give your life to ignorance,
          mediocrity and vulgarity.
        </div>
      </div>
    </div> -->

    <div class="clock pr">
      <div ref="centerRef"></div>
      <div ref="pointerRef"></div>
      <div ref="tableRef" class="table"></div>
      <div class="invisible" v-for="(item, index) in clockScaleList" :style="{ transform: `rotate(${item}deg)` }">
        <div class="scale"></div>
      </div>
      <div class="invisible" v-for="(item, index) in thickClockScaleList" :style="{ transform: `rotate(${item[0]}deg)` }">
        <div class="thick">{{ item[1] }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const clockScaleList = ref([]);
const thickClockScaleList = ref([]);
onMounted(() => {
  let startYear = 2021;
  for (let i = -60, year = startYear - 1; i < 300; i += 6) {
    clockScaleList.value.push(i);
    if (i % 60 === 0) {
      thickClockScaleList.value.push([i, year]);
      year++;
    }
  }
});
</script>

<style lang="scss" scoped>
.timeLine {
  height: calc(100vh - 60px);
  .clock {
    height: 90%;
    aspect-ratio: 1 / 1;
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: white;
    border: #ff9214 30px solid;
    .table {
      width: 96%;
      height: 96%;
      border-radius: 50%;
      position: absolute;
      top: 2%;
      left: 2%;
      transition: transform 0.8s ease-in-out;
    }
    .thick {
      width: 6%;
      height: 6px;
      background-color: #5053fc;
      position: absolute;
      top: calc(50% - 3px);
      left: 0px;
      span {
        font-size: 50px;
        position: absolute;
        left: 140%;
        top: calc(50% - 30px);
        color: #5053fc;
      }
    }
    .invisible {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform-origin: 50% 50%;
      position: absolute;
      .scale {
        width: 4%;
        height: 2px;
        background-color: #5053fc;
        position: absolute;
        top: calc(50% - 0.5px);
        left: 0px;
      }
      .thick {
        width: 6%;
        height: 6px;
        background-color: #5053fc;
        position: absolute;
        top: calc(50% - 3px);
        left: 0px;
        span {
          font-size: 50px;
          position: absolute;
          left: 140%;
          top: calc(50% - 30px);
          color: #5053fc;
        }
      }
    }
  }
}

.iconfont {
  width: 80px;
  height: 80px;
  position: absolute;
  left: 27%;
  z-index: 999;
  font: 900 80px "";
  color: #fff;
}

#up-btn {
  top: 5%;
}

#down-btn {
  bottom: 5%;
}

#content {
  width: 30%;
  height: 100%;
  position: absolute;
  left: 15%;
  overflow: hidden;
}

.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  transition: transform 0.8s ease-in-out;
}

.card-time {
  font-size: 40px;
  font-weight: 700;
}

.card-title {
  font-size: 50px;
  font-weight: 500;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
}

.card-passage {
  font-size: 24px;
  font-weight: 300;
}
</style>
