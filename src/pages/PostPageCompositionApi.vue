<template>
  <div>
    <div>{{ likes  }}</div>
    <my-button @click="addLike">add like</my-button>
    <h1>Posts page</h1>
    <my-input
        v-focus
        v-model="searchQuery"
        placeholder="Search..."
    />
    <div class="add-btns">
      <my-button
          class="btn_create"
      >
        create post
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />

    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import axios from "axios";
import MyInput from "@/components/UI/MyInput.vue";
import {ref} from "vue";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    MyInput,
    PostForm, PostList,
  },
  data() {
    return {
      isPostsLoading: false,
      sortOptions: [
        {value: 'title', name: 'by title'},
        {value: 'body', name: 'by content'},
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    }
  }
}
</script>

<style>

.btn_create {
  margin: 10px 0;
}

.page__wrapper {
  display: flex;
  margin: 15px 0;
  gap: 5px;
}

.page {
  padding: 10px;
  border: 1px solid gray;
}

.page_current {
  background-color: rgba(128, 128, 128, 0.5);
}

.observer {
  height: 30px;
  background: grey;
}

</style>
