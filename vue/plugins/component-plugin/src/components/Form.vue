<template>
  <div>
    <p>This is a Component Plugin</p>
    <span>
      <slot name="name"/>
    </span>
    <span>
      <slot name="password"/>
    </span>
  </div>
</template>

  <script>
    export default{

    }
  </script>

<style>
span{
  margin: 5px 20px;
}
</style>