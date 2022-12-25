import PortalPopover from '../PortalPopover.vue';

export default {
  title: 'Components/Help Center/Portal Popover',
  component: PortalPopover,
  argTypes: {
    active: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PortalPopover },
  template:
    '<PortalPopover v-bind="$props" @click="onClick">{{label}}</PortalPopover>',
});

export const Primary = Template.bind({});

Primary.args = {
  portals: [
    {
      name: 'Chatwoot Help Center',
      id: 1,
      color: null,
      custom_domain: 'doc',
      articles_count: 123,
      header_text: null,
      homepage_link: null,
      page_title: null,
      slug: 'first_portal',
      archived: false,
      config: {
        allowed_locales: [
          {
            code: 'en',
            name: 'English',
            articles_count: 123,
          },
        ],
      },
      locales: [
        {
          name: 'English',
          code: 'en',
          articles_count: 12,
        }
      ],
    },
    {
      name: 'Chatwoot Docs',
      id: 2,
      color: null,
      custom_domain: 'doc',
      articles_count: 124,
      header_text: null,
      homepage_link: null,
      page_title: null,
      slug: 'second_portal',
      archived: false,
      config: {
        allowed_locales: [
          {
            code: 'en',
            name: 'English',
            articles_count: 123,
          }
        ],
      },
      locales: [
        {
          name: 'English',
          code: 'en',
          articles_count: 12,
        },
      ],
    },
  ],
};
