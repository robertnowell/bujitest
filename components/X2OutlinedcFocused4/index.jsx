import React from "react";
import styled from "styled-components";
import {
  RobotoNormalMediumPurple8px,
  RobotoNormalPinkSwan16px,
  RobotoNormalMediumPurple12px,
} from "../../styledMixins";


function X2OutlinedcFocused4(props) {
  const { inputText, label2, assistiveText } = props;

  return (
    <X2OutlinedcFocused>
      <OverlapGroup5>
        <Label src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/label-5@2x.svg" />
        <Input>
          <InputText>{inputText}</InputText>
          <Cursor></Cursor>
        </Input>
        <Label1>
          <Label2>{label2}</Label2>
          <UpperSurface src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/upper-surface-5@2x.svg" />
        </Label1>
      </OverlapGroup5>
      <AssistiveText>{assistiveText}</AssistiveText>
    </X2OutlinedcFocused>
  );
}

const X2OutlinedcFocused = styled.div`
  width: 373px;
  margin-top: 24px;
  margin-right: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 72px;
`;

const OverlapGroup5 = styled.div`
  width: 375px;
  height: 62px;
  position: relative;
  margin-top: -7px;
  margin-left: -1px;
`;

const Label = styled.img`
  position: absolute;
  width: 375px;
  height: 56px;
  top: 6px;
  left: 0;
`;

const Input = styled.div`
  position: absolute;
  height: 24px;
  top: 23px;
  left: 17px;
  display: flex;
  align-items: center;
  min-width: 121px;
`;

const InputText = styled.div`
  ${RobotoNormalPinkSwan16px}
  min-height: 24px;
  min-width: 120px;
  letter-spacing: 0.15px;
  line-height: 24px;
  white-space: nowrap;
`;

const Cursor = styled.div`
  width: 1px;
  height: 17px;
  background-color: var(--medium-purple);
`;

const Label1 = styled.div`
  position: absolute;
  height: 14px;
  top: 0;
  left: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 341px;
`;

const Label2 = styled.div`
  ${RobotoNormalMediumPurple12px}
  min-height: 16px;
  margin-top: -1px;
  min-width: 94px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 245px;
  height: 2px;
  align-self: center;
  margin-left: 3px;
`;

const AssistiveText = styled.p`
  ${RobotoNormalMediumPurple8px}
  min-height: 16px;
  margin-top: 4px;
  margin-left: 16px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

export default X2OutlinedcFocused4;
