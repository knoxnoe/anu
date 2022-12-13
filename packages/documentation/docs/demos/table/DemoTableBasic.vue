<script setup lang="ts">
const rows = [
  {
    name: '1',
    username: 'Bret',
    website: 'hildegard.org',
  },
  {
    name: '2',
    username: 'Antonette',
    website: 'anastasia.net',
  },
  {
    name: '3 Bauch',
    username: 'Samantha',
    website: 'ramiro.info',
  },
  {
    name: '4 Lebsack',
    username: 'Karianne',
    website: 'kale.biz',
  },
  {
    name: '5 Dietrich',
    username: 'Kamren',
    website: 'demarco.info',
  },
  {
    name: '6 Graham',
    username: 'Bret',
    website: 'hildegard.org',
  },
  {
    name: '7 Howell',
    username: 'Antonette',
    website: 'anastasia.net',
  },
  {
    name: '8 Bauch',
    username: 'Samantha',
    website: 'ramiro.info',
  },
  {
    name: '9 Lebsack',
    username: 'Karianne',
    website: 'kale.biz',
  },
  {
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    website: 'demarco.info',
  },
  {
    name: 'Leanne Graham',
    username: 'Bret',
    website: 'hildegard.org',
  },
  {
    name: 'Ervin Howell',
    username: 'Antonette',
    website: 'anastasia.net',
  },
  {
    name: 'Clementine Bauch',
    username: 'Samantha',
    website: 'ramiro.info',
  },
  {
    name: 'Patricia Lebsack',
    username: 'Karianne',
    website: 'kale.biz',
  },
  {
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    website: 'demarco.info',
  },
  {
    name: 'Ervin Howell',
    username: 'Antonette',
    website: 'anastasia.net',
  },
  {
    name: '11 Bauch',
    username: 'Samantha',
    website: 'ramiro.info',
  },
  {
    name: '12 Lebsack',
    username: 'Karianne',
    website: 'kale.biz',
  },
  {
    name: '13 Dietrich',
    username: 'Kamren',
    website: 'demarco.info',
  },
  {
    name: '14 Howell',
    username: 'Antonette',
    website: 'anastasia.net',
  },
  {
    name: '15 Bauch',
    username: 'Samantha',
    website: 'ramiro.info',
  },
  {
    name: '16 Lebsack',
    username: 'Karianne',
    website: 'kale.biz',
  },
  {
    name: '17 Dietrich',
    username: 'Kamren',
    website: 'demarco.info',
  },
]
</script>

<template>
  <div class="cards-demo-container">
    <ATable
      :rows="rows"
      :page-size="5"
    />
  </div>
</template>
