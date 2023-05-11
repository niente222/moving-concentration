<template>
    <div>
      <h1>404 Not Found</h1>
      <p>お探しのページが見つかりませんでした。</p>
      <p>恐れ入りますが、以下のリンクからサイト内をご覧ください。</p>
      <router-link to="/">トップページへ戻る</router-link>
    </div>
  </template>
  
  <script>
    export default {
      name: 'NotFound'
    }
  </script>