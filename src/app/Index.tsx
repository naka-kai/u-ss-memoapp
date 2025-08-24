import { JSX } from "react"
import { View, Text, StyleSheet } from "react-native"

const Index = (): JSX.Element => {
  return (
    // 画面全体
    <View style={styles.container}>

      {/* ヘッダー */}
      <View>
        {/* テキストが入るヘッダー部分 */}
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      {/* メモリスト全体 */}
      <View>

        {/* メモアイテム */}
        <View>
          {/* テキスト部分（左） */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年10月1日 10:00</Text>
          </View>
          {/* バツボタン（右） */}
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* メモアイテム */}
        <View>
          {/* テキスト部分（左） */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年10月1日 10:00</Text>
          </View>
          {/* バツボタン（右） */}
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* メモアイテム */}
        <View>
          {/* テキスト部分（左） */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年10月1日 10:00</Text>
          </View>
          {/* バツボタン（右） */}
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      {/* プラスボタン */}
      <View>
        <Text>＋</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index