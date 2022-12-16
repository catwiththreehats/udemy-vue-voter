const app = Vue.createApp({
    data: function() {
        return {
            submissions: submissions, // submissions is defined in seed.js
        };
    },
    computed: {
        totalVotes() {
            return this.submissions.reduce((total, submission) => total + submission.votes, 0);
        }
    },
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(submission => submission.id === submissionId);
            submission.votes++;
        },
    }
});

const vm = app.mount('#app');