const submissions = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 16,
    avatar: '../public/images/image1.jpg',
    submissionImage: '../public/images/image2.jpg',
  },
  {
    id: 2,
    title: 'Green Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 26,
    avatar: '../public/images/image2.jpg',
    submissionImage: '../public/images/image1.jpg',
  },
  {
    id: 3,
    title: 'Coloured Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 20,
    avatar: '../public/images/image1.jpg',
    submissionImage: '../public/images/image2.jpg',
  },
  {
    id: 4,
    title: 'Nature beautiful Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 9,
    avatar: '../public/images/image3.jpg',
    submissionImage: '../public/images/image1.jpg',
  },
  {
    id: 5,
    title: 'Grand breaking Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 10,
    avatar: '../public/images/image2.jpg',
    submissionImage: '../public/images/image3.jpg',
  },
];

const submissionComponent = {
  template: `
      <div style="display: flex; width: 100%;">
        <figure class="media-left">
            <img
              class="image is-64x64"
              :src="submission.submissionImage"
              alt="nature image"
            />
          </figure>

          <div class="media-content">
            <div class="content">
              <p>
                <strong>
                  <a :href="submissions[0].url" class="has-text-info">{{submission.title}}</a>
                  <span class="tag is-small">#{{submission.id}}</span>
                </strong>
                <br />
                {{ submission.description }}
                <br />
                <small class="is-size-7">
                  Submitted by:
                  <img class="image is-24x24" :src="submission.avatar" />
                </small>
              </p>
            </div>
          </div>

          <div class="media-right">
            <span class="icon is-small" @click="upvote(submission.id)">
              <i class="fa fa-chevron-up"></i>
              <strong class="has-text-info">{{submission.votes}}</strong>
            </span>
          </div>
      </div>`,
  props: ['submission', 'submissions'],
  methods: {
    upvote(sId) {
      const submission = this.submissions.find((submission) => submission.id === sId);
      if (submission) {
        submission.votes++;
      }
    },
  },
};

const app_2 = new Vue({
  el: '#app_2',
  data: {
    submissions: submissions,
  },
  computed: {
    sortedSubmission() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  components: {
    'submission-component': submissionComponent,
  },
});
