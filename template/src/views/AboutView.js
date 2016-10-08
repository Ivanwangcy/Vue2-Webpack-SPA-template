import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'msg'
  ]),
  render(h){
    return (
      <div>
        { this.msg }
      </div>
    )
  }
}
