import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'msg'
  ]),
  methods: mapActions([
    'increment'
  ])
  render(h){
    return (
      <div>
        { this.count }
        <i class="fa fa-thumbs-o-up fa-5x" on-click={this.increment}></i>
      </div>
    )
  }
}
