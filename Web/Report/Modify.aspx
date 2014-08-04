<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true"
    CodeBehind="Modify.aspx.cs" Inherits="Maticsoft.Web.Report.Modify" Title="修改页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table style="width: 100%;" cellpadding="2" cellspacing="1" class="border">
        <tr>
            <td class="tdbg">
                <table cellspacing="0" cellpadding="0" width="100%" border="0">
                    <tr>
                        <td height="25" width="30%" align="right">
                            ID ：
                        </td>
                        <td height="25" width="*" align="left">
                            <asp:Label ID="lblID" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">
                            姓名 ：
                        </td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtname" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">
                            项目名称 ：
                        </td>
                        <td height="25" width="*" align="left">
                            <asp:DropDownList ID="txtprojectName" runat="server" Width="200px">
                                <asp:ListItem>高校第二课堂活动管理系统</asp:ListItem>
                                <asp:ListItem>仪器设备管理系统</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">
                            时间 ：
                        </td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txttime" runat="server" class="input Wdate" Style="width: 200px;
                                height: 22px" onclick="WdatePicker()"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">
                            本日工作内容 ：
                        </td>
                        <td height="25" width="*" align="left">
                            <textarea id="txttodayWork" cols="80" rows="5" runat="server"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">
                            问题 ：
                        </td>
                        <td height="25" width="*" align="left">
                            <textarea id="txtproblem" cols="80" rows="5" runat="server"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">
                            下一步工作内容 ：
                        </td>
                        <td height="25" width="*" align="left">
                            <textarea id="txttomorrowWork" cols="80" rows="5" runat="server"></textarea>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="tdbg" align="center" valign="bottom">
                <asp:Button ID="btnSave" runat="server" Text="保存" OnClick="btnSave_Click" class="inputbutton"
                    onmouseover="this.className='inputbutton_hover'" onmouseout="this.className='inputbutton'">
                </asp:Button>
                <asp:Button ID="btnCancle" runat="server" Text="取消" OnClick="btnCancle_Click" class="inputbutton"
                    onmouseover="this.className='inputbutton_hover'" onmouseout="this.className='inputbutton'">
                </asp:Button>
            </td>
        </tr>
    </table>
</asp:Content>
<%--<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceCheckright" runat="server">
</asp:Content>--%>
