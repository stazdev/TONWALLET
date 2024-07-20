import React from "react";
import { ViewWrapper, InfoCard, HorizontalLine, Pill } from "@/components";
import { Colors } from "@/constants/Colors";
import { WalletToken } from "@/interfaces";

interface TokenListProps {
  tokens: WalletToken[];
}

const TokenList: React.FC<TokenListProps> = ({ tokens }) => (
  <ViewWrapper>
    {tokens.map((token, index) => (
      <React.Fragment key={token.name}>
        {index > 0 && <HorizontalLine />}
        <InfoCard
          imageSource={token.imageSource}
          leftTextTop={{ text: token.name, size: 16, weight: "semibold" }}
          leftTextBottom={{
            text: token.price,
            size: 14,
            weight: "medium",
            color: Colors.dark.text_secondary,
          }}
          rightTextTop={{ text: token.amount, size: 16, weight: "semibold" }}
          rightTextBottom={{
            text: token.value,
            size: 14,
            weight: "medium",
            color: Colors.dark.text_secondary,
          }}
          leftTextTopPill={
            token.name === "USD₮" ? (
              <Pill
                text="TON"
                backgroundColor="grey"
                style={{ marginRight: 8 }}
              />
            ) : undefined
          }
        />
      </React.Fragment>
    ))}
  </ViewWrapper>
);

export default TokenList;
