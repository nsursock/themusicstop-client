import { apiUrl } from '@/env.json'
import axios from 'axios'

export default {
  bind: (el, binding, vnode) => {
    async function loadButton() {
      const buttonElement = el.querySelector('button');
      if (buttonElement) {
        let query;
        query = `query {
          relationOne(filter: {
            memberId2: "${binding.value.loggedInId}" AND: {
              memberId1: "${binding.value.selectedId}"
            }
          }) {
            _id
            memberId1
            memberId2
          	status
        	}
        }`;
        let r1 = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        r1 = r1.data.data.relationOne;

        query = `query {
          relationOne(filter: {
            memberId1: "${binding.value.loggedInId}" AND: {
              memberId2: "${binding.value.selectedId}"
            }
          }) {
            _id
            memberId1
            memberId2
            status
          }
        }`;
        let r2 = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        r2 = r2.data.data.relationOne;

        let { isPending, initLoggedIn, isConfirmed } = vnode.context;

        if (r1 !== null) {
          vnode.context.$set(initLoggedIn, binding.value.idx, false);
          vnode.context.$set(isPending, binding.value.idx, r1.status === 'pending');
          vnode.context.$set(isConfirmed, binding.value.idx, r1.status === 'friend');
        } else if (r2 !== null) {
          vnode.context.$set(initLoggedIn, binding.value.idx, true);
          vnode.context.$set(isPending, binding.value.idx, r2.status === 'pending');
          vnode.context.$set(isConfirmed, binding.value.idx, r2.status === 'friend');
        } else {
          vnode.context.$set(initLoggedIn, binding.value.idx, false);
          vnode.context.$set(isPending, binding.value.idx, false);
          vnode.context.$set(isConfirmed, binding.value.idx, false);
        }
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadButton();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0"
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadButton();
    }
  }
};
