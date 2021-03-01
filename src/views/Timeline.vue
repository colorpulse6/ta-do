<template>
  <div class="timeline">
    <div v-for="(timeSlot, index) in timeSlots" :key="index">
      <input
        type="number"
        min="1"
        max="24"
        v-model="timeSlots[index].startValue"
        @change="dateInput(index)"
      />
      -
      <input
        type="number"
        min="1"
        max="24"
        v-model="timeSlots[index].endValue"
        @change="dateInput(index)"
      />
      <app-todo></app-todo>
      <!-- <div>
        <p>{{ timeSlot.startValue }} - {{ timeSlot.endValue }}</p>
      </div> -->
    </div>

    <button @click="addTimeSlot">Add Slot</button>
  </div>
</template>
<script>
import Todo from '../components/Todo.vue';

export default {
  components: { 'app-todo': Todo },
  data() {
    return {
      totalHours: 24,
      timeSlots: [{ startValue: 0, endValue: 24 }],
      timeSlotAmount: 1,
      initialStartInput: 1,

      initialStartTime: '00:00',
      initialEndTime: '12:59'
    };
  },
  methods: {
    dateInput(index) {
      for (let i = 0; i < this.timeSlots.length; i++) {
        this.timeSlots[index + 1].startValue = this.timeSlots[index].endValue;
      }
    },
    // addValues() {
    //   const sum = this.timeSlots.reduce(
    //     (accum, item) => accum + Number(item.startValue),
    //     0
    //   );
    //   this.initialStartInput = sum;
    // },
    addTimeSlot() {
      this.timeSlotAmount++;
      const divider = this.totalHours / this.timeSlotAmount;

      this.timeSlots.push({ startValue: null, endValue: null });
      for (let i = 0; i < this.timeSlots.length; i++) {
        if (i > 0) {
          this.timeSlots[i].startValue = (this.timeSlots[i] - 1).endValue;
          this.timeSlots[i].endValue = divider * (i + 1);
        }
        this.timeSlots[i].startValue = divider * i;
        this.timeSlots[i].endValue = divider * (i + 1);
      }
      console.log(this.timeSlots, divider, this.timeSlotAmount);
    }
  }
};
</script>
