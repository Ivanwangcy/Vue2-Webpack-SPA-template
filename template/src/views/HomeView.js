import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'msg'
  ]),
  render(h) {
    return (
      <img class="logo" src="./assets/logo.png">
      <h1>
        <i class="fa fa-camera-retro"></i>{ this.msg }
      </h1>

    )
  }
}
