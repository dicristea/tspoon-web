import { BodyText, heading2FontSize, Section } from '../../styles/styles';

export default function MidSection({ heading, text, imgSource }) {
  return (
    <Section>
      <div>
        <img alt="placeholder 1" src={imgSource} />
      </div>
      <div>
        <Heading2>Functionality #1</Heading2>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </BodyText>
      </div>
    </Section>
  );
}

const styles = {
  emptyContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  emptyText: {
    alignSelf: 'center',
    fontFamily: 'SourceSans3_500Medium',
    fontSize: heading2FontSize
  }
};
