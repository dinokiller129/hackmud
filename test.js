function(context, args)
{
	var caller = context.caller;
	var l = #s.scripts.lib();
	
	var test = #s.chats.send({channel:args.channel, msg:args.msg});
	
	return { ok:test };
}
