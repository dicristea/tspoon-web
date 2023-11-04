import { BodyText, heading2FontSize } from '../../styles/styles';

export default function EmptySection() {
  return (
    <div style={styles.emptyContainer}>
      <BodyText style={styles.emptyText}>Nothing here yet!</BodyText>
    </div>
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
