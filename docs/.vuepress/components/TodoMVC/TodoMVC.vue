<template>
  <div class="com-todomvc">
    <div class="com-todomvc__content">
        <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          v-focus
          @keydown.enter="handleNewTodoKeyDown"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <!-- This section should be hidden by default and shown when there are todos -->
      <template v-if="todos.length">
        <section class="main">
          <!-- 之前的方式 -->
          <!-- <input
          id="toggle-all"
          @change="handleToggleAllChange"
          class="toggle-all"
          :checked="toggleAllStat"
          type="checkbox">-->

          <!--
            双向绑定结合计算属性实现同样功能
            对数据驱动视图理解越深，这种代码可以写到非常的简洁
            这就是 Vue 的方式
            相比上面的代码要更精妙一些
          -->
          <!--
            这里的复选框双向绑定了 toggleAllStat 属性（计算属性）
            无论是普通属性还是计算属性都要取值和赋值
            这里我们绑定的属性比较特殊，所以当你访问 toggleAllStat 会调用计算属性的 get 方法
            当你为 toggleAllStat 重新赋值的时候就会调用 set 方法
            我们的表单控件具有双向绑定
          -->
          <input id="toggle-all" class="toggle-all" v-model="toggleAllStat" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
          <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
            <!--
            任务项有三种样式状态：
              未完成：无样式
              已完成：completed
              编辑：editing
            -->
            <!--
            当我双击的时候，我就把 currentEditing = 当前双击的这个任务项
            每个任务项 class 的 editing 都有一个判定：如果 currentEditing === 我自己 ，则该任务项就获得 editing 样式
            -->
            <li
              :class="{
              completed: item.completed,
              editing: currentEditing === item
            }"
              v-for="(item, index) in filterTodos"
            >
              <div class="view">
                <input class="toggle" v-model="item.completed" type="checkbox" />
                <label @dblclick="handleGetEditingDblclick(item)">{{ item.title }}</label>
                <!--
                当事件处理函数没有传参的时候，第一个参数就是默认的事件源对象：event
                当手动传递了参数的时候，就没办法获取默认的 event 事件源对象
                这个时候我们可以手动在调用方法的时候传递 $event 来接收 event 事件源对象
                -->
                <button class="destroy" @click="handleRemoveTodoClick(index, $event)"></button>
              </div>
              <!--
              由于我们还有一个取消编辑不保存的功能，所以我们这里就不使用双向数据绑定
              -->
              <input
                class="edit"
                :value="item.title"
                @keydown.enter="handleSaveEditKeydown(item, index, $event)"
                @blur="handleSaveEditKeydown(item, index, $event)"
                @keydown.esc="handleCancelEditEsc"
                v-todo-focus="currentEditing === item"
              />
            </li>
          </ul>
        </section>
        <!-- This footer should hidden by default and shown when there are todos -->
        <footer class="footer">
          <!-- This should be `0 items left` by default -->
          <!--
          在模板中放入太多的逻辑会让模板过重且难以维护
          当你想要在模板中多次引用此处功能时，就会更加难以处理。
          所以，对于任何复杂逻辑，你都应当使用计算属性。

          1. 使用方法可以把这种复杂逻辑封装起来
             每使用一次就调用一次，重复使用效率不高
          2. 使用计算属性
              1. 不要让模板逻辑太重
              2. 解决性能问题
          -->
          <!-- <span class="todo-count"><strong>{{ todos.filter(t => !t.completed).length }}</strong> item left</span> -->
          <!-- <span class="todo-count"><strong>{{ getRemaningCount() }}</strong> item left</span>
          <span class="todo-count"><strong>{{ getRemaningCount() }}</strong> item left</span>-->

          <span class="todo-count">
            <strong>{{ remaningCount }}</strong> item left
          </span>

          <!-- Remove this if you don't implement routing -->
          <ul class="filters">
            <li>
              <a :class="{selected: filterText === ''}" href="#/">All</a>
            </li>
            <li>
              <a :class="{selected: filterText === 'active'}" href="#/active">Active</a>
            </li>
            <li>
              <a :class="{selected: filterText === 'completed'}" href="#/completed">Completed</a>
            </li>
          </ul>
          <!-- Hidden if no completed items are left ↓ -->
          <button
            class="clear-completed"
            v-if="todos.some(item => item.completed)"
            @click="handleClearAllDoneClick"
          >Clear completed</button>
        </footer>
      </template>
    </section>
    <footer>
      <p>
        <a id="btn-back-home" href="/index.html">返回首页</a>
      </p>
    </footer>
    </div>
  </div>
</template>

<script>
// 页面初始化的时候调用一次，保持过滤状态

// 该事件在页面初始化的时候不会执行，只有 change 的才会执行

export default {
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem("todos") || "[]"),
      currentEditing: null,
      filterText: "all"
    };
  },
  directives: {
    focus: {
      // 当被绑定的元素插入到 DOM 中时……
      inserted: function(el) {
        // 聚焦元素
        el.focus();
      }
    },
    "todo-focus": {
      update(el, binding) {
        // console.log('todo-focus 指令所在模板更新了', el)
        // el.focus()
        console.log(binding.value); // currentEditing === item
        if (binding.value) {
          el.focus();
        }
      }
    }
  },
  methods: {
    handleNewTodoKeyDown(e) {
      // 0. 注册按下的回车事件
      // 1. 获取文本框的内容
      // 2. 数据校验
      // 3. 添加到 todos 列表
      // 4. 清空文本框
      // console.log(this.todoText)
      const target = e.target;
      const value = target.value.trim();
      if (!value.length) {
        return;
      }
      const todos = this.todos;
      todos.push({
        // 如果数组是空的就给 1 ，否则就是最后一个元素的 id + 1
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title: value,
        completed: false
      });
      target.value = "";
    },

    handleToggleAllChange(e) {
      // 0. 绑定 checkbox 的 change 事件
      // 1. 获取 checkbox 的选中的状态
      // 2. 直接循环所有的子任务项的选中状态设置为 toggleAll 的状态
      const checked = e.target.checked;
      this.todos.forEach(item => {
        item.completed = checked;
      });
    },

    handleRemoveTodoClick(index, e) {
      this.todos.splice(index, 1);
    },

    handleGetEditingDblclick(todo) {
      // 把这个变量等于当前双击的 todo
      this.currentEditing = todo;
    },

    // 编辑任务，敲回车保存编辑
    handleSaveEditKeydown(todo, index, e) {
      // 0. 注册绑定事件处理函数
      // 1. 获取编辑文本框的数据
      // 2. 数据校验
      //    如果数据是空的，则直接删除该元素
      //    否则保存编辑
      const target = e.target;
      const value = target.value.trim();

      // 数据被编辑为空的了，直接删除
      if (!value.length) {
        this.todos.splice(index, 1);
      } else {
        todo.title = value;
        this.currentEditing = null;
      }
    },

    handleCancelEditEsc() {
      // 1. 把样式给去除
      this.currentEditing = null;
    },

    handleClearAllDoneClick() {
      // 过滤结果的方式
      // 我们这里还有一种办法也很简单
      // 我们把需要的结果给过滤出来重新赋值到 todos 中
      this.todos = this.todos.filter(t => !t.completed);
    },

    // 获取剩余的任务数量
    // 后来把这个方法改为了计算属性
    getRemaningCount() {
      console.log(111);
      return this.todos.filter(t => !t.completed).length;
    }
  },
  computed: {
    remaningCount: {
      // 当你访问 remaningCount 会自动调用 get 方法
      get() {
        return this.todos.filter(t => !t.completed).length;
      },
      // 当你 实例.remaningCount = xxx 的时候会自动调用 set 方法
      // 注意：这里只是为了演示语法
      set() {
        console.log("remaningCount 的 set 方法被调用了");
      }
    },
    toggleAllStat: {
      get() {
        // 计算属性知道它依赖了 todos
        // 当 todos 发生变化，计算属性会重新计算
        return this.todos.every(t => t.completed);
      },
      set() {
        // 表单控件 checkbox 双向绑定了 toggleAllStat
        // 所以 checkbox 的变化会调用 set 方法
        // 在 set 方法中我们要做的就是
        //    1. 得到当前 checkbox 的选中状态
        //    2. 把所有任务项的选项状态都设置为 toggle-all 的选中状态

        // 在自己的 set 方法中访问自己就是调用自己 get 方法
        // console.log(this.toggleAllStat)
        const checked = !this.toggleAllStat;
        this.todos.forEach(item => {
          item.completed = checked;
        });
      }
    },
    filterTodos() {
      switch (this.filterText) {
        case "active":
          return this.todos.filter(t => !t.completed);
          break;
        case "completed":
          return this.todos.filter(t => t.completed);
          break;
        default:
          return this.todos;
          break;
      }
    }
  },
  watch: {
    todos: {
      handler(val, oldVal) {
        // 这里既可以通过 this.todos 来访问，也可以通过 val 来得到最新的 todos
        window.localStorage.setItem("todos", JSON.stringify(val));
      },
      deep: true // 深度监视，只有这样才能监视到数组或者对象孩子...孩子... 成员的改变
      // immediate: true // 无乱变化与否，你上来就给我调用一次，如何使用看需求
    },
    '$route'(route){
      this.filterText = route.hash.substr(2);
    }
  }
};
</script>

<style scoped>
@import url("./css/index.css");
</style>