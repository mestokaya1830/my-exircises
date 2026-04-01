<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <button @click="$router.push('/admin/posts')">Back</button>
  </div>
</template>
