import * as S from "styles/work";
import styled from 'styled-components';
import FlexboxLayout from "layouts/FlexboxLayout";
import { firstParagraph } from "constants/work";
import NextHead from "components/NextHead";

function Work() {
  return <FlexboxLayout>
    <NextHead  title="Giovani Fouz Jiménez, github work list." />
    <S.MainSection>
      <S.MainPicture />
    </S.MainSection>
    <S.PrimarySection>
      <S.PrimaryArticle>
        <S.Paragraph>
          { firstParagraph }
        </S.Paragraph>
      </S.PrimaryArticle>
      <S.PictureContainer>
       <S.PrimarySectionPicture />
      </S.PictureContainer>
    </S.PrimarySection>
    <S.SecondarySection>
     <S.SecondaryArticle>
        <S.Paragraph>
          { firstParagraph }
        </S.Paragraph>
     </S.SecondaryArticle>
     <S.PictureContainer>
       <S.LastPicture />
     </S.PictureContainer>
    </S.SecondarySection>
  </FlexboxLayout>;
}
export default Work;

