const vm = Vue.createApp({
    data() {
        return {
            disabled: 1
        }
    },
    methods: {
        search() {
            let selVal = document.querySelector('#insOrQueryFunc').value;
            let obj = {};
            obj.userName = document.querySelector('#userName').value;
            obj.enName = document.querySelector('#enName').value;
            obj.location = document.querySelector('#location').value;
            obj.companyCode = document.querySelector('#companyCode').value;
            obj.sn = document.querySelector('#sn').value;
            obj.device = document.querySelector('#device').value;
            obj.type = document.querySelector('#type').value;
            obj.buyDate = document.querySelector('#buyDate').value;
            obj.remark = document.querySelector('#remark').value;
            if (selVal == 'Query') {

            }


        }
    }
});

vm.mount('#app');