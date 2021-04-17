<template>
  <div class="editor">
    <div class="topBar">
      <span v-for="(tool, index) in tools"
            @click="selectTool(tool.utility)"
            :key="index"
            :class="selectedTool === tool.utility ? 'active' : ''"
            class="icon">
        <i :class="tool.icon"></i>
      </span>
    </div>

    <div style="padding-top: 50px; position: absolute; left: 0; top: 30px;">
      <h1>tasks</h1>
      <template v-for="(task, index) in tasks">
        <p @click="ctrlz(task)" style="color: white;">{{ task.element }} - x:{{ task.x }} - y:{{ task.y }}</p>
      </template>
      <pre>{{ actualTask }}</pre>
    </div>

    <div class="workspace">
      <div v-if="activeView === 'recto' || activeView === 'rv'"
           @wheel.prevent="zoom"
           @mouseover="activeZoom"
           class="front">
        <div v-for="(input, index) in inputs"
             :key="index"
             :class="`draggableElements d${input.id}`"
             style="color: red">{{ input.text }}</div>
      </div>
      <div v-if="activeView === 'verso' || activeView === 'rv'"
           @wheel.prevent="zoom"
           @mouseover="activeZoom"
           class="back"></div>
    </div>

    <div class="sidebar">
      <div class="bloc">
        <h1>Vues</h1>
        <div class="optionsViews">
          <img v-for="(view, index) in views"
               :key="index"
               class="icon"
               @click="selectView(view.utility)"
               :src="activeView === view.utility ? view.activeIcon : view.icon"
               :alt="view.alt">
        </div>
      </div>

      <div class="bloc">
        <h1>Textes</h1>
        <div class="textViews">
          <template v-for="(input, index) in inputs">
            <base-input
              v-model="input.text"
              @remove-input="removeInput(index)"/>
          </template>
          <span @click="addInput">
            <i class="icon fas fa-plus"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { gsap, TweenMax, Draggable } from 'gsap/all'
  import { v4 as uuidv4 } from 'uuid'

  import BaseInput from '@/views/components/BaseInput'

  export default {
    components: {
      BaseInput
    },
    data () {
      return {
        baseScale: 1,
        zoomableElement: null,
        tools: [
          {
            utility: 'select',
            icon: 'fas fa-mouse-pointer'
          },
          {
            utility: 'displace',
            icon: 'fas fas fa-arrows-alt'
          },
          {
            utility: 'rotate',
            icon: 'fas fa-sync-alt'
          },
          {
            utility: 'undo',
            icon: 'fas fa-undo'
          },
          {
            utility: 'redo',
            icon: 'fas fa-redo'
          }
        ],
        views: [
          {
            utility: 'recto',
            alt: 'recto icon',
            icon: require('@/assets/icons/views/recto.svg'),
            activeIcon: require('@/assets/icons/views/active/recto.svg')
          },
          {
            utility: 'verso',
            alt: 'verso icon',
            icon: require('@/assets/icons/views/verso.svg'),
            activeIcon: require('@/assets/icons/views/active/verso.svg')
          },
          {
            utility: 'rv',
            alt: 'rv icon',
            icon: require('@/assets/icons/views/rv.svg'),
            activeIcon: require('@/assets/icons/views/active/rv.svg')
          }
        ],
        inputs: [],
        tasks: [],
        actualTask: null,
        selectedTool: '',
        activeView: 'recto',
        activeZoomOn: '',
      }
    },
    methods: {
      zoom (event) {
        this.baseScale += event.deltaY * -0.01
        this.baseScale = Math.min(Math.max(1, this.baseScale), 3.5)
        this.activeZoomOn.style.transform = `scale(${this.baseScale})`
      },
      addInput () {
        this.inputs.push({ id: uuidv4(), text: '' })
        setTimeout(() => { // RELOU CE SET TIMEOUT
          const d = document.querySelectorAll('.draggableElements')

          for (let i = 0; i < d.length; i++) {
            let mainDraggable = new Draggable(d[i], {
              bounds: '.front',
              onDragStart: (e) => {
                this.actualTask = {
                  task: 'Drag',
                  element: e.target.className
                }
              },
              onDragEnd: (e) => {
                this.actualTask = null

                this.tasks.push({
                  element: e.target.className,
                  x: e.layerX - e.offsetX,
                  y: e.layerY - e.offsetY
                })
              }
            })
            mainDraggable.enable()
          }

          TweenMax.to(d[-1], 1, { x: 0, y: 0 })
        })
      },
      ctrlz ({ element, x, y }) {
        const htmlElement = document.querySelector(`.${element.split(' ')[1]}`)
        TweenMax.to(htmlElement, 1, { x, y })
      },
      removeInput (index) {
        this.inputs.splice(index, 1)
      },
      activeZoom (event) {
        this.activeZoomOn = event.target
      },
      selectTool (tool) {
        this.selectedTool = tool
      },
      selectView (view) {
        this.activeView = view
      }
    },
    mounted () {
      gsap.registerPlugin(Draggable)
      this.zoomableElement = [document.querySelector('.front'), document.querySelector('.back')]
    }
  }
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";

.draggableElements {
  width: fit-content;
}

.editor {
  .topBar {
    width: 100vw;
    background-color: $black;
    position: fixed;
    border-bottom: 1px solid $primary;
    align-items: center;
    padding: 15px;

    .icon {
      color: $white;
      margin-right: 20px;

      &:hover {
        cursor: pointer;
      }

      &.active {
        color: $primary;
      }
    }
  }

  .sidebar {
    height: 100vh;
    width: 15%;
    border-left: 1px solid $primary;
    background: $black;
    z-index: 1;
    position: fixed;
    right: 0;
    top: 0;
    padding-top: 12px;

    .bloc {
      margin-bottom: 15px;

      h1 {
        font-size: 18px;
        padding-left: 15px;
        margin-bottom: 15px;
        color: $white;
      }

      .optionsViews {
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        padding-right: 30px;

        .icon {
          height: 30px;
          width: 30px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .textViews {
        padding-left: 15px;
        padding-right: 40px;

        .texts {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
      }
    }
  }

  .workspace {
    height: 100vh;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;

    .front, .back {
      height: 55mm;
      width: 85mm;
      border: 1px solid $primary;
    }
  }
}

.icon {
  color: $white;

  &:hover {
    cursor: pointer
  }
}
</style>
