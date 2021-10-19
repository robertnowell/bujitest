import React from "react";
import styled from "styled-components";
import {
  RobotoNormalMediumPurple8px,
  RobotoNormalPinkSwan16px,
  RobotoNormalMediumPurple12px,
} from "../../styledMixins";


function X2OutlinedcFocused3(props) {
  const { inputText, label2, assistiveText } = props;

  return (
    <X2OutlinedcFocused>
      <OverlapGroup3>
        <Label src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/label-3@2x.svg" />
        <InputText>{inputText}</InputText>
        <Label1>
          <Label2>{label2}</Label2>
          <UpperSurface src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/upper-surface-3@2x.svg" />
        </Label1>
      </OverlapGroup3>
      <AssistiveText>{assistiveText}</AssistiveText>
    </X2OutlinedcFocused>
  );
}

const X2OutlinedcFocused = styled.div`
  width: 174px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 72px;
`;

const OverlapGroup3 = styled.div`
  width: 176px;
  height: 62px;
  position: relative;
  margin-top: -7px;
  margin-right: -1px;
`;

const Label = styled.img`
  position: absolute;
  width: 176px;
  height: 56px;
  top: 6px;
  left: 0;
`;

const InputText = styled.div`
  ${RobotoNormalPinkSwan16px}
  position: absolute;
  top: 23px;
  left: 17px;
  letter-spacing: 0.15px;
  line-height: 24px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  position: absolute;
  height: 14px;
  top: 0;
  left: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 159px;
`;

const Label2 = styled.div`
  ${RobotoNormalMediumPurple12px}
  min-height: 16px;
  margin-top: -1px;
  min-width: 65px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 92px;
  height: 2px;
  align-self: center;
  margin-left: 3px;
`;

const AssistiveText = styled.p`
  ${RobotoNormalMediumPurple8px}
  min-height: 16px;
  margin-top: 4px;
  margin-right: -18px;
  min-width: 176px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

export default X2OutlinedcFocused3;
