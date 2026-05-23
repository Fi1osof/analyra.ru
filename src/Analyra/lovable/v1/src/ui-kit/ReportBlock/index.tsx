import React from "react";
import {
  BlockStyled,
  BlockHeaderStyled,
  BlockHeaderLeftStyled,
  BlockIconStyled,
  BlockTitleStyled,
  BlockDescStyled,
  BlockBodyStyled,
  BlockLoadingStyled,
  BlockLoadingHintStyled,
  BlockLoadingDotStyled,
} from "./styles";
import { Skeleton } from "../Skeleton";
import type { ReportBlockProps } from "./types";

export const ReportBlock: React.FC<ReportBlockProps> = ({
  title,
  description,
  icon,
  accent = "default",
  loading = false,
  loadingLabel = "Идёт анализ",
  loadingSkeleton,
  meta,
  children,
  className,
}) => {
  return (
    <BlockStyled $accent={accent} className={className}>
      <BlockHeaderStyled>
        <BlockHeaderLeftStyled>
          {icon && <BlockIconStyled $accent={accent}>{icon}</BlockIconStyled>}
          <div>
            <BlockTitleStyled>{title}</BlockTitleStyled>
            {description && <BlockDescStyled>{description}</BlockDescStyled>}
          </div>
        </BlockHeaderLeftStyled>
        {loading ? (
          <BlockLoadingHintStyled>
            <BlockLoadingDotStyled />
            {loadingLabel}
          </BlockLoadingHintStyled>
        ) : (
          meta
        )}
      </BlockHeaderStyled>
      <BlockBodyStyled>
        {loading ? (
          <BlockLoadingStyled>
            {loadingSkeleton ?? (
              <>
                <Skeleton height={14} width="70%" />
                <Skeleton height={14} />
                <Skeleton height={14} width="85%" />
                <Skeleton height={80} radius={10} />
              </>
            )}
          </BlockLoadingStyled>
        ) : (
          children
        )}
      </BlockBodyStyled>
    </BlockStyled>
  );
};
