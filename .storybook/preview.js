import '../src/index.css'

/**
 * Parameters:
 *
 * Parameters are typically used to control the behavior of Storybook's
 * features and addons. In our case we're going to use them to configure
 * how the actions (mocked callbacks) are handled.
 */
export const parameters = {
  /**
   * Actions:
   *
   * actions allows us to create callbacks that appear in the
   * actions panel of the Storybook UI when clicked. So when we build
   * a pin button, we’ll be able to determine in the test UI if a button
   * click is successful.
   */
  actions: { argTypesRegex: '^on[A-Z].*' },
};