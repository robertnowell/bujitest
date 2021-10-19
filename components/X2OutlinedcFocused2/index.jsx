import React from "react";
import styled from "styled-components";
import { RobotoNormalMediumPurple12px } from "../../styledMixins";


function X2OutlinedcFocused2(props) {
  const { inputText, label2 } = props;

  return (
    <X2OutlinedcFocused>
      <OverlapGroup1>
        <Label src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/label-1@2x.svg" />
        <InputText>{inputText}</InputText>
        <Label1>
          <Label2>{label2}</Label2>
          <UpperSurface src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/upper-surface-1@2x.svg" />
        </Label1>
      </OverlapGroup1>
    </X2OutlinedcFocused>
  );
}

const X2OutlinedcFocused = styled.div`
  height: 72px;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 174px;
`;

const OverlapGroup1 = styled.div`
  width: 176px;
  height: 62px;
  position: relative;
  margin-top: -7px;
`;

const Label = styled.img`
  position: absolute;
  width: 176px;
  height: 56px;
  top: 6px;
  left: 0;
`;

const InputText = styled.div`
  position: absolute;
  top: 23px;
  left: 17px;
  font-family: var(--font-family-roboto);
  color: #bababade;
  font-size: var(--font-size-16px);
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
  min-width: 71px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 86px;
  height: 2px;
  align-self: center;
  margin-left: 3px;
`;

export default X2OutlinedcFocused2;
