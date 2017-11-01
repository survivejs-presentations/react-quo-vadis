// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  // BlockQuote,
  //Cite,
  // CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  // Markdown,
  // Quote,
  Slide,
  // Table,
  // TableRow,
  // TableHeaderItem,
  // TableItem,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    googleTrends: require("../images/google-trends.png"),
    survivejs: require("../images/survivejs.png"),
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React - Quo Vadis
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="primary">
          <Heading size={1} textColor="tertiary">
            Google Trends
          </Heading>
          <Layout>
            <Image src={images.googleTrends} width="754px" />
          </Layout>
          <Layout>
            <Text>
              <Link href="https://trends.google.com/trends/explore?date=2014-01-01%202017-11-01&q=%2Fm%2F012l1vxv,%2Fm%2F0j45p7w">
                Google Trends
              </Link>
            </Text>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Components</Heading>
          <List>
            <Appear>
              <ListItem>
                <code>React.createClass</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>extends Component</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Functions</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Universal Component Systems! Example:{" "}
                <Link href="https://github.com/lelandrichardson/react-primitives">
                  react-primitives
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            From ad hoc Components to Style Guides
          </Heading>
          <List>
            <Appear>
              <ListItem>
                No style guide, no pressure to standardize style
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://storybook.js.org/">Storybook</Link>,{" "}
                <Link href="https://react-styleguidist.js.org/">
                  React Styleguidist
                </Link>, <Link href="https://www.catalog.style/">Catalog</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>React specific IDEs and tooling</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Bridging React with designers. Example:{" "}
                <Link href="http://airbnb.io/react-sketchapp/">
                  react-sketchapp
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Styling</Heading>
          <List>
            <Appear>
              <ListItem>
                <u>
                  Styling isn't a first class citizen in React (exception: RN)
                </u>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>className="foo bar"</code>, poor coupling
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>{"className={styles.demo}"}</code>, better coupling
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>CSS Modules</b> as a first step
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>css-in-js</b> as the next step for apps.{" "}
                <Link href="https://www.npmjs.com/package/styled-components">
                  styled-components
                </Link>{" "}
                and dozens of others
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>State Management</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/redux">
                  Redux
                </Link>{" "}
                won?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Abstractions over Redux. Example:{" "}
                <Link href="https://kea.js.org/">Kea</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Do <b>not</b> cargocult
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>The right solution depends on the context</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Options: no state manager,{" "}
                <Link href="https://cerebraljs.com/">Cerebral</Link>,{" "}
                <Link href="https://www.npmjs.com/package/mobx">MobX</Link>,{" "}
                <Link href="https://www.npmjs.com/package/mobx-state-tree">
                  mobx-state-tree
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>API Communication</Heading>
          <List>
            <Appear>
              <ListItem>
                <code>fetch</code> and co.?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>GraphQL</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://facebook.github.io/relay/">Relay</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.apollographql.com/">Apollo</Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Type Systems</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/prop-types">
                  prop-types
                </Link>?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://flow.org/">Flow</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.typescriptlang.org/">TypeScript</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://reasonml.github.io/">Reason</Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Performance</Heading>
          <List>
            <Appear>
              <ListItem>New rendering pipeline in React 16</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Asynchronous rendering and different priorities
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Important for animation!</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>import().then(...)</code> to split
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Server Side Rendering</Heading>
          <List>
            <Appear>
              <ListItem>Still a hard problem</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Abstractions:{" "}
                <Link href="https://www.npmjs.com/package/next">Next.js</Link>,{" "}
                <Link href="https://www.npmjs.com/package/react-snap">
                  react-snap
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Static site generators:{" "}
                <Link href="https://www.npmjs.com/package/gatsby">Gatsby</Link>,{" "}
                <Link href="https://www.npmjs.com/package/phenomic">
                  Phenomic
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/antwar">Antwar</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                React 16 provides <code>renderToStaticStream</code>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Web Components</Heading>
          <List>
            <Appear>
              <ListItem>Huge amount of fragmentation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Web Components to rescue?</ListItem>
            </Appear>
            <Appear>
              <ListItem>The current specification is broken</ListItem>
            </Appear>
            <Appear>
              <ListItem>I expect a fragmented future (short term)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Beyond Web</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://facebook.github.io/react-vr/">
                  React VR
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/react-hardware">
                  react-hardware
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>React renderers anywhere</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>SurviveJS</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px" />
        </Slide>
      </Deck>
    );
  }
}
