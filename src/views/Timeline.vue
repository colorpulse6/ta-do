<template>
  <div class="timeline">
    <div v-for="(timeSlot, index) in timeSlots" :key="index">
      <!-- <input
        type="number"
        min="1"
        max="24"
        v-model="timeSlots[index].startValue"
        @change="dateInput"
      />
      -
      <input
        type="number"
        min="1"
        max="24"
        v-model="timeSlots[index].endValue"
      /> -->
      <div>
        <p>{{ timeSlot.startValue }} - {{ timeSlot.endValue }}</p>
      </div>
    </div>

    <button @click="addTimeSlot">Add Slot</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalHours: 24,
      timeSlots: [{ startValue: 1, endValue: 24 }],
      timeSlotAmount: 1,
      initialStartInput: 1,
      initialStartTime: '00:00',
      initialEndTime: '12:59'
    };
  },
  methods: {
    dateInput(event) {
      if (this.timeSlots.length !== 1) {
        this.addValues();
      } else {
        this.initialStartInput = event.target.startValue;
      }
    },
    addValues() {
      const sum = this.timeSlots.reduce(
        (accum, item) => accum + Number(item.startValue),
        0
      );
      this.initialStartInput = sum;
    },
    addTimeSlot() {
      // const range = this.totalHours / this.timeSlots.length;
      // const start = range - range + 1;
      // const end = range;
      this.timeSlotAmount++;
      const divider = this.totalHours / this.timeSlotAmount;

      this.timeSlots.push({ startValue: null, endValue: null });
      for (let i = 0; i < this.timeSlots.length; i++) {
        this.timeSlots[i].startValue = divider * i;
        this.timeSlots[i].endValue = divider * (i + 1);
      }
      console.log(this.timeSlots, divider, this.timeSlotAmount);
    }
  }
};
</script>
