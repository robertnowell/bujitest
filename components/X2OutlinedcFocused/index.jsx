import React from "react";
import styled from "styled-components";
import { RobotoNormalPinkSwan16px, RobotoNormalMediumPurple12px } from "../../styledMixins";


function X2OutlinedcFocused(props) {
  const { inputText, label2, className } = props;

  return (
    <X2OutlinedcFocused1 className={`x2-outlinedc-focused ${className || ""}`}>
      <OverlapGroup className="overlap-group">
        <Label
          className="label"
          src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/label@2x.svg"
        />
        <InputText className="input-text">{inputText}</InputText>
        <Label1 className="label-1">
          <Label2 className="label-2">{label2}</Label2>
          <UpperSurface
            className="upper-surface"
            src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/upper-surface@2x.svg"
          />
        </Label1>
      </OverlapGroup>
    </X2OutlinedcFocused1>
  );
}

const X2OutlinedcFocused1 = styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 174px;

  &.x2-outlinedc-focused.x2-outlinedc-focused-1 {
    margin-top: 24px;
    margin-right: 4px;
    min-width: 373px;
  }

  &.x2-outlinedc-focused.x2-outlinedc-focused-2 {
    margin-left: 25px;
  }
`;

const OverlapGroup = styled.div`
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
  min-width: 72px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 85px;
  height: 2px;
  align-self: center;
  margin-left: 3px;
`;

const OverlapGroup2 = styled.div`
  .x2-outlinedc-focused.x2-outlinedc-focused-1 & {
    width: 375px;
  }
`;

const Label3 = styled.div`
  .x2-outlinedc-focused.x2-outlinedc-focused-1 & {
    left: 19px;
    min-width: 341px;
  }
`;

const Label4 = styled.div`
  ${RobotoNormalMediumPurple12px}

  .x2-outlinedc-focused.x2-outlinedc-focused-1  & {
    min-width: 67px;
  }
`;

const UpperSurface1 = styled.img`
  .x2-outlinedc-focused.x2-outlinedc-focused-1 & {
    width: 272px;
  }
`;

const Label5 = styled.div`
  ${RobotoNormalMediumPurple12px}

  .x2-outlinedc-focused.x2-outlinedc-focused-2  & {
    min-width: 114px;
  }
`;

const UpperSurface2 = styled.img`
  .x2-outlinedc-focused.x2-outlinedc-focused-2 & {
    width: 43px;
  }
`;

export default X2OutlinedcFocused;
